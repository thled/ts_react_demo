import dispatcher from "../appDispatcher";
import * as courseApi from '../api/courseApi';
import { Action } from "./actionTypes";

export function saveCourse(course: courseApi.Course) {
  courseApi.saveCourse(course)
    .then((savedCourse: courseApi.Course) => {
      dispatcher.dispatch({
        actionType: Action.CREATE_COURSE,
        course: savedCourse,
      });
    });
}

