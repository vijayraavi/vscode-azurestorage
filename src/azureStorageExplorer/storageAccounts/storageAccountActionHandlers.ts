/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { storageExplorerLauncher } from '../../storageExplorerLauncher/storageExplorerLauncher';
import { StorageAccountNode } from './storageAccountNode';
import * as copypaste from 'copy-paste';
import { IAzureNode, AzureActionHandler } from 'vscode-azureextensionui';

export function registerStorageAccountActionHandlers(actionHandler: AzureActionHandler) {
    actionHandler.registerCommand("azureStorage.openStorageAccount", openStorageAccountInStorageExplorer);
    actionHandler.registerCommand("azureStorage.copyPrimaryKey", copyPrimaryKey);
    actionHandler.registerCommand("azureStorage.copyConnectionString", copyConnectionString);
}

function openStorageAccountInStorageExplorer(node: IAzureNode<StorageAccountNode>) {
    var resourceId = node.treeItem.storageAccount.id;
    var subscriptionid = node.subscription.subscriptionId;

    storageExplorerLauncher.openResource(resourceId, subscriptionid);
}

async function copyPrimaryKey(node: IAzureNode<StorageAccountNode>) {
    var primaryKey = await node.treeItem.getPrimaryKey();
    copypaste.copy(primaryKey.value);
}

async function copyConnectionString(node: IAzureNode<StorageAccountNode>) {
    var connectionString = await node.treeItem.getConnectionString();
    copypaste.copy(connectionString);
}