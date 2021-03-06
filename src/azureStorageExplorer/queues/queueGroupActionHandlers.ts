/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.md in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { registerCommand } from 'vscode-azureextensionui';
import { createChildNode } from '../commonTreeCommands';
import { QueueGroupTreeItem } from './queueGroupNode';

export function registerQueueGroupActionHandlers(): void {
    registerCommand("azureStorage.createQueue", async (treeItem?: QueueGroupTreeItem) => await createChildNode(QueueGroupTreeItem.contextValue, treeItem));
}
