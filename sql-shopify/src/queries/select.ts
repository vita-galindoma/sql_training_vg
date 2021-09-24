import {CATEGORIES, REVIEWS } from "../shopify-table-names";

export const selectCount = (table: string): string => {
  return `select count(*) as c from '${table}'`;
};

export const selectRowById = (id: number, table: string): string => {
  return `select * from '${table}' where id = ${id}`;
};

export const selectCategoryByTitle = (title: string): string => {
  return `select * from ${CATEGORIES} where title = '${title}'`;
};

export const selectAppCategoriesByAppId = (appId: number): string => {
  return `select categories.title as category_title, apps.title as app_title, apps_categories.category_id
  from categories
  join apps_categories on category_id=categories.id
  join apps on apps.id=apps_categories.app_id
  where apps.id=${appId}`;
};

export const selectUnigueRowCount = (tableName: string, columnName: string): string => {
  return `select count ( distinct ${columnName}) as c 
FROM ${tableName}`;
};

export const selectReviewByAppIdAuthor = (appId: number, author: string): string => {
  return `select * from ${REVIEWS} where app_id = ${appId} and author = '${author}'`;
};

export const selectColumnFromTable = (columnName: string, tableName: string): string => {
  return `select ${columnName} from ${tableName}`;
};

