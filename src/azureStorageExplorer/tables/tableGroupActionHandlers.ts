/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.md in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { registerCommand } from 'vscode-azureextensionui';
import { createChildNode } from '../commonTreeCommands';
import { TableGroupTreeItem } from './tableGroupNode';

export function registerTableGroupActionHandlers(): void {
    registerCommand("azureStorage.createTable", async (treeItem?: TableGroupTreeItem) => await createChildNode(TableGroupTreeItem.contextValue, treeItem));
}
