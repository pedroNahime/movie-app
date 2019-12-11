import { runSaga } from 'redux-saga'
import { Creators as moviesActions } from '../../../ducks/movies'
import { getMovie } from '../index'
import api from '../../../../services/api'

let dispatchedActions = []
const fakeStore = {
  dispatch: action => dispatchedActions.push(action)
}
afterEach(() => {
  dispatchedActions = []
})

test('should load data in case of success', async () => {
  let mockData = {
    data: { movies: [{ name: 'some_name', type: 'some_type' }] }
  }

  api.get = jest.fn().mockResolvedValue(mockData)
  await runSaga(fakeStore, getMovie).done
  expect(api.get.mock.calls.length).toBe(1)
  expect(dispatchedActions).toContainEqual(
    moviesActions.successMovie(mockData.data)
  )
})
test('should return error in case of failure', async () => {
  let mockData = {
    response: {
      status: 'some_status',
      data: {
        status_message: 'some_message',
        status_code: 'some_code'
      }
    }
  }

  api.get = jest.fn().mockRejectedValue(mockData)
  await runSaga(fakeStore, getMovie).done
  expect(api.get.mock.calls.length).toBe(1)
  expect(dispatchedActions).toContainEqual(
    moviesActions.errorMovie(mockData.response)
  )
})
