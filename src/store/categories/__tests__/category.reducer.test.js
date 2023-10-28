import {
  categoriesReducer,
  CATEGORIES_INITIAL_STATE,
} from '../category.reducer';
import {
  fetchCategoriesStart,
  fetchCategoriesSuccess,
  fetchCategoriesFailed,
} from '../category.action';

describe('Category Reducer tests', () => {
  test('fetchCategoriesStart', () => {
    const expectedState = {
      ...CATEGORIES_INITIAL_STATE,
      isLoading: true,
    };

    expect(
      categoriesReducer(CATEGORIES_INITIAL_STATE, fetchCategoriesStart())
    ).toEqual(expectedState);
  });

  test('fetchCategoriesSuccess', () => {
    const categories = [
      {
        title: 'mens',
        imageUrl: 'test',
        items: [
          {
            id: 1,
            name: 'product 1',
          },
          {
            id: 2,
            name: 'product 2',
          },
        ],
      },
      {
        title: 'womens',
        imageUrl: 'test',
        items: [
          {
            id: 3,
            name: 'product 3',
          },
          {
            id: 4,
            name: 'product 4',
          },
        ],
      },
    ];

    const expectedState = {
      ...CATEGORIES_INITIAL_STATE,
      categories,
    };

    expect(
      categoriesReducer(
        CATEGORIES_INITIAL_STATE,
        fetchCategoriesSuccess(categories)
      )
    ).toEqual(expectedState);
  });

  test('fetchCategoriesFailed', () => {
    const error = {
      name: 'error',
      message: 'error',
    };

    const expectedState = {
      ...CATEGORIES_INITIAL_STATE,
      error,
    };

    expect(
      categoriesReducer(CATEGORIES_INITIAL_STATE, fetchCategoriesFailed(error))
    ).toEqual(expectedState);
  });
});
