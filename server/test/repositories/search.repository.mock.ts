import { SearchRepository } from 'src/repositories/search.repository';
import { RepositoryInterface } from 'src/types';
import { Mocked, vitest } from 'vitest';

export const newSearchRepositoryMock = (): Mocked<RepositoryInterface<SearchRepository>> => {
  return {
    searchMetadata: vitest.fn(),
    searchSmart: vitest.fn(),
    searchDuplicates: vitest.fn(),
    searchFaces: vitest.fn(),
    searchRandom: vitest.fn(),
    upsert: vitest.fn(),
    searchPlaces: vitest.fn(),
    getAssetsByCity: vitest.fn(),
    deleteAllSearchEmbeddings: vitest.fn(),
    getDimensionSize: vitest.fn(),
    setDimensionSize: vitest.fn(),
    getCameraMakes: vitest.fn(),
    getCameraModels: vitest.fn(),
    getCities: vitest.fn(),
    getCountries: vitest.fn(),
    getStates: vitest.fn(),
  };
};
