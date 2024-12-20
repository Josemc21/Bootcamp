import '@testing-library/jest-dom'
import { render, fireEvent} from '@testing-library/react'
import Note from './Note'

test('renders content', () => {
  const note = {
    content: 'This is a test',
    important: true
  }

  const component = render(<Note note={note} />)

  component.getByText('This is a test')
  component.getByText('make not important')
  // expect(component.container).toHaveTextContent(note.content)

  console.log(component)
})

test('clicking the button calls event handler once', () => {
  const note = {
    content: 'This is a test',
    important: true
  }

  const mockHandler = jest.fn()

  const component = render(<Note note={note} toggleImportance={mockHandler} />)

  const button = component.getByText('make not important')
  fireEvent.click(button)

  // expect(mockHandler.mock.calls).toHaveLength(1)
  expect(mockHandler).toHaveBeenCalledTimes(1)
})