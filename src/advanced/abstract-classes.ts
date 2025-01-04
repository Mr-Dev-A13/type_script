abstract class Command {
    abstract commandLine(): string;

    execute(): void {
        console.log('Executing:', this.commandLine());
    }
}
// TS2515: Non-abstract class GitResetCommand does not
// implement inherited abstract member commandLine from class Command
class GitResetCommand extends Command {
    commandLine(): string {
        return "git reset --hard";
    }
}
class GitFetchCommand extends Command {
    commandLine(): string {
        return "git fetch --all";
    }
}
new GitResetCommand().execute();
new GitFetchCommand().execute();
// new Command(); // TS2511: Cannot create an instance of an abstract class.
// --- END ---
