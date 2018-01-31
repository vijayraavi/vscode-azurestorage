/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

const invalidChars = ['"', '/', '\\', ':', '|', '<', '>', '?', '*'];
const invalidCharsString = invalidChars.join(', ');

export function validateDirectoryName(name: string): string | undefined | null {
    if (!name) {
        return "Directory name cannot be empty";
    }

    if (name.length < 1 || name.length > 255) {
        return 'Directory name must contain between 1 and 255 characters';
    }

    if (invalidChars.some(ch => name.indexOf(ch) >= 0)) {
        return `Directory name cannot contain the following characters: '${invalidCharsString}`;
    }


    return undefined;
}

export function validateFileName(name: string): string | undefined | null {
    if (!name) {
        return "Filename cannot be empty";
    }

    if (name.length < 1 || name.length > 255) {
        return 'Filename must contain between 1 and 255 characters';
    }

    if (invalidChars.some(ch => name.indexOf(ch) >= 0)) {
        return `Filename cannot contain the following characters: ${invalidCharsString}'`;
    }

    return undefined;
}
