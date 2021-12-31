import dispatcher from "../appDispatcher";
import * as courseApi from '../api/courseApi';
import { Action } from "./actionTypes";

export type CreateCourseAction = {
  actionType: Action.CREATE_COURSE;
  course: courseApi.Course;
};

export function saveCourse(course: courseApi.Course) {
  return courseApi.saveCourse(course)
    .then((savedCourse: courseApi.Course) => {
      dispatcher.dispatch({
        actionType: Action.CREATE_COURSE,
        course: savedCourse,
      } as CreateCourseAction);
    });
}

