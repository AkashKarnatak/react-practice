import Section from './components/Section'
import TaskForm from './components/TaskForm'
import Tasks from './components/Tasks'

function App() {
  return (
    <div className='flex min-h-svh flex-col items-center gap-8 bg-[#222] p-16'>
      <Section className='p-6'>
        <TaskForm />
      </Section>
      <Section className='p-12'>
        <Tasks />
      </Section>
    </div>
  )
}

export default App
