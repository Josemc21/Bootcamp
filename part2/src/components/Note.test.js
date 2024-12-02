import '@testing-library/jest-dom'
import { render} from '@testing-library/react'
import Note from './Note'

test('renders content', () => {
  const note = {
    content: 'This is a test',
    important: true
  }

  const component = render(<Note note={note} />)

  // component.getByText('This is a test')
  // component.getByText('make not important')
  expect(component.container).toHaveTextContent(note.content)

  console.log(component)
})