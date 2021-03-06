/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.md in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { isNullOrUndefined } from 'util';
import { Endpoints, StorageAccount, StorageAccountKey } from '../../node_modules/azure-arm-storage/lib/models';

export function nonNull<T>(value: T | undefined, name?: string): T {
    if (isNullOrUndefined(value)) {
        throw new Error(
            // tslint:disable-next-line:prefer-template
            "Internal error: Expected value to be not null and not undefined"
            + (name ? `: ${name}` : ''));
    }

    return value;
}

// tslint:disable-next-line:no-any
function copyNonNullProperty<TSource, TDest>(source: TSource, dest: { [key: string]: any }, name: keyof TSource & keyof TDest): void {
    // tslint:disable-next-line:no-any
    let value: any = nonNull(source[name], <string>name);
    dest[<string>name] = value;
}

/**
 * Wrappers around StorageAccountWrapper that guarantees certain properties are not undefined/null
 */
export class StorageAccountWrapper {
    constructor(_account: StorageAccount) {
        copyNonNullProperty(_account, this, 'id');
        copyNonNullProperty(_account, this, 'name');
        copyNonNullProperty(_account, this, 'type');
        copyNonNullProperty(_account, this, 'primaryEndpoints');
    }

    readonly id: string;
    readonly name: string;
    // tslint:disable-next-line:no-reserved-keywords
    readonly type: string;
    readonly primaryEndpoints: Endpoints;
}

/**
 * Wrappers around StorageAccountKeyWrapper that guarantees certain properties are not undefined/null
 */
export class StorageAccountKeyWrapper {
    constructor(_key: StorageAccountKey) {
        copyNonNullProperty(_key, this, 'value');
        copyNonNullProperty(_key, this, 'keyName');
    }

    readonly value: string;
    readonly keyName: string;
}
