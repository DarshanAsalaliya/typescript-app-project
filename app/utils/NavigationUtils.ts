/*
 * List of functions for the navigation purposes.
 */

import {
  CommonActions,
  DrawerActions,
  NavigationContainerRefWithCurrent,
  ParamListBase,
  StackActions,
  createNavigationContainerRef,
} from '@react-navigation/native';

/**
 * creates a ref that can be used to navigate to a new screen
 * @returns {React.RefObject<NavigationContainerRef>} - a ref that can be used to navigate to a new screen.
 */
const navigationRef =
  createNavigationContainerRef<
    NavigationContainerRefWithCurrent<ParamListBase>
  >();

/**
 * checks if the navigation is not ready, wait 50 miliseconds and try again, otherwise call the callback function
 * @param {() => void} moveCallback - this is the funcion that will be called when the navigation is ready.
 * @returns None
 */
const navigationCheck = (moveCallback: () => void): void => {
  if (!navigationRef.isReady()) {
    setTimeout(() => navigationCheck(moveCallback), 50);
  } else {
    moveCallback?.();
  }
};

/**
 * It pops the current screen from the navigation stack
 * @param {number} [screenCount=0] - the number of screen to pop
 * @param {boolean} [isPopToTop=false] - if true, the navigation stack will be popped to the top.
 * @returns None
 */
const navigationPop = (
  screenCount: number = 0,
  isPopToTop: boolean = false,
): void => {
  navigationCheck(() => {
    const popAction = isPopToTop
      ? StackActions.popToTop()
      : StackActions.pop(screenCount);

    navigationRef.dispatch(popAction);
  });
};

/**
 * Navigates back one screen in the navigation history.
 * @returns None
 */
const navigateBack = (): void => {
  navigationCheck(() => {
    const backAction = CommonActions.goBack();
    navigationRef.dispatch(backAction);
  });
};

/**
 * It will replace th ecurrent screen with the screen you want to navigate to.
 * @param {string} routeName - The name of the route to navigate to.
 * @param {object} [params={}] - This is an object that contains the parameters you want to pass to the next screen.
 * @returns None
 */
const navigationWithReplace = (routeName: string, params = {}): void => {
  navigationCheck(() => {
    const replaceAction = StackActions.replace(routeName, params);
    navigationRef.dispatch(replaceAction);
  });
};

/**
 * Navigates to the given rout ename with the given params
 * @param {string} routeName - the name of the route to navigate to
 * @param {object} [params={}] - this is the object that contains the parameter that you want to pass to the next screen
 * @param {boolean} [merge=false] - whether or not to nmerge the params with the existing params
 * @returns None
 */
const navigationWithParam = (
  routeName: string,
  params = {},
  merge: boolean = false,
): void => {
  navigationCheck(() => {
    const navigateAction = CommonActions.navigate({
      name: routeName,
      params,
      merge,
    });

    navigationRef.dispatch(navigateAction);
  });
};

/**
 * Navigate to a new route with a push action
 * @param {string} routeName - the name of the route to navigate to
 * @param {object} [params={}] - this is an object that contains the parameters you want to pass to the next screen
 * @returns None
 */
const navigateWithPush = (routeName: string, params = {}) => {
  navigationCheck(() => {
    const pushAction = StackActions.push(routeName, params);
    navigationRef.dispatch(pushAction);
  });
};

/**
 * It resets the navigation stack to the given params.
 * @param {string} stackName - the name of the stack you want to navigate to
 * @param {string} routeName - the name of the route to navigate to
 * @param {object} [params={}] - this is an object that contains the parameters that you want to pass to the next screen
 */
const navigateWithReset = (
  stackName: string,
  routeName: string,
  params = {},
): void => {
  navigationCheck(() => {
    const resetAction = CommonActions.reset({
      index: 0,
      routes: [
        {
          name: routeName,
          params: params,
        },
      ],
    });
    navigationRef.dispatch(resetAction);
  });
};

/**
 * Open and Close drawer respectevely
 * @returns None
 */
const toggleDrawer = (): void => {
  navigationCheck(() => {
    const toggleAction = DrawerActions.toggleDrawer();
    navigationRef.dispatch(toggleAction);
  });
};

export {
  navigateBack,
  navigateWithPush,
  navigateWithReset,
  navigationPop,
  navigationRef,
  navigationWithParam,
  navigationWithReplace,
  toggleDrawer,
};
