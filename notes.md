#
**GitHub Lessons Learned**
- always make sure you are in the right directory when cloneing, commiting, pulling, and pushing
- understand how to fix and merge conflicts especially for when you need to work with others!

**.md files**
- to upload an image put in the same directory as the folder that you are working on and then use the code ![placeholder](image_name)

**.The Console**
Console Overview:

- Before graphical interfaces, all computing systems were command-based, using consoles (command line, shell, terminal).
- Even today, professional developers frequently use the console for programming tasks.

Console as a Development Tool:

- The console is essential for web development, providing file system access and executing command line applications.
- There are different console applications available, and all operating systems come with a default one.

POSIX Compliance:

- For web development, the console must be POSIX compliant, which ensures it supports a standard set of commands.
- macOS and Linux consoles are POSIX compliant by default. For Windows, Git Bash is recommended.

Windows Setup:

- Use Git Bash or Windows Subsystem for Linux (WSL) for web development on Windows.
- Avoid using PowerShell or cmd, as they aren't POSIX compliant.

Basic Console Commands:

- Examples of commands include pwd (show current directory), ls (list files), cd (change directory), and mkdir (make directory).
- Other commands include echo, rm, mv, cp, curl, grep, ps, sudo, and more.

Piping and Redirection:

- You can chain commands using | to pipe output, and use > or >> to redirect output to files.
- Example: ls -l | grep ' Nov ' | wc -l counts files modified in November.

Keystrokes:

- Special keystrokes include CTRL-R (search command history) and CTRL-C (stop running commands).