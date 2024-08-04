export const commands = {
  banner: () => `
  ███████╗ ██╗   ██╗██████╗ ██╗   ██╗ █████╗ 
  ██╔════╝ ██║   ██║██╔══██╗██║   ██║██╔══██╗
  ███████║ ██║   ██║██████║║████████║███████║
       ██║ ██║   ██║██╔══██║   ██║   ██╔══██║
  ███████║ ╚██████╔╝██║  ██║   ██║   ██║  ██║
  ╚══════╝  ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝
                                                    
    Type 'help' to see available commands.
    `,
  help: () => `
  Available commands:
    - help: Show this help message
    - clear: Clear the terminal
    - about: Learn about me
    - projects: View my projects
    - contact: Get my contact information
  `,
  about: () =>
    `I'm a passionate developer who loves creating amazing web experiences.`,
  projects: () => `
  My Projects:
  1. Terminal Portfolio - A unique portfolio website
  2. Task Manager - A React-based task management app
  3. Weather App - Real-time weather information using APIs
  `,
  contact: () => `
  Email: your.email@example.com
  GitHub: https://github.com/yourusername
  LinkedIn: https://www.linkedin.com/in/yourprofile
  `,
  clear: () => {
    // This command is handled in the Input component
    return "";
  },
};
