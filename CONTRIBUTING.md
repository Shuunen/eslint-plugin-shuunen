# Contributing to eslint-plugin-shuunen

Thank you for your interest in contributing to eslint-plugin-shuunen! This document provides guidelines and instructions for contributing.

## Development Setup

1. Fork the repository
2. Clone your fork
3. Install dependencies:

   ```bash
   pnpm install
   ```

4. Run the tests to ensure everything is working:

   ```bash
   pnpm test
   ```

## Development Workflow

1. Create a new branch for your feature/fix :
  
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes following the project's coding style:
   - Use TypeScript for all new code
   - Follow the existing code style
   - Add tests for new features
   - Update documentation as needed

3. Run the tests and linting:

   ```bash
   pnpm check
   ```

4. Commit your changes with a descriptive message:
  
   ```bash
   git commit -m "feat: add new rule for X"
   ```

5. Push your branch and create a pull request

## Code Style

- Use TypeScript for all new code
- Follow ESLint rules defined in the project
- Use JSDoc comments for documentation
- Keep functions small and focused
- Add tests for all new features

## Pull Request Guidelines

- Keep PRs focused and small
- Include tests for new features
- Update documentation as needed
- Follow the commit message convention:
  - `feat:` for new features
  - `fix:` for bug fixes
  - `docs:` for documentation changes
  - `style:` for code style changes
  - `refactor:` for code refactoring
  - `test:` for test changes
  - `chore:` for maintenance tasks

## Testing

- All new features must include tests
- Run `pnpm test` before submitting a PR
- Ensure 100% test coverage for new code

## Documentation

- Update README.md for significant changes
- Add JSDoc comments for new functions
- Document any breaking changes

## Questions?

Feel free to open an issue if you have any questions about contributing !
