javascript
const vscode = require('vscode');

function activate(context) {
    let insertDate = vscode.commands.registerCommand('date.insert', function () {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const date = new Date().toLocaleDateString('ru-RU');
            editor.edit(editBuilder => {
                editBuilder.insert(editor.selection.active, date);
            });
        }
    });
    context.subscriptions.push(insertDate);
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
}