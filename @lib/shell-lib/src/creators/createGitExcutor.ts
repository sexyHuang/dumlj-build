import commandExists from 'command-exists'
import { createExcutor } from './createExcutor'

export const createGitExcutor = createExcutor((excute) => {
  if (commandExists('git')) {
    return excute()
  }
})
