import * as React from 'react';
import { Nav, INavLink, INavStyles, INavLinkGroup } from '@fluentui/react/lib/Nav';

const navStyles: Partial<INavStyles> = {
root: {
    width: 208,
    height: 350,
    boxSizing: 'border-box',
    border: '1px solid #eee',
    overflowY: 'auto',
    },
};

const navLinkGroups: INavLinkGroup[] = [
{
    links: [
    {
        name: 'Metadata',
        url: 'http://example.com',
        expandAriaLabel: 'Expand Home section',
        collapseAriaLabel: 'Collapse Home section',
        links: [
        {
            name: 'Entity',
            url: 'http://msn.com',
            key: 'key1',
            target: '_blank',
        },
        {
            name: 'Account',
            url: 'http://msn.com',
            disabled: true,
            key: 'key2',
            target: '_blank',
        },
        {
            name: 'Period',
            url: 'http://msn.com',
            disabled: true,
            key: 'key3',
            target: '_blank',
        },
        {
            name: 'Year',
            url: 'http://msn.com',
            disabled: true,
            key: 'key4',
            target: '_blank',
        },
        {
            name: 'Value',
            url: 'http://msn.com',
            disabled: true,
            key: 'key5',
            target: '_blank',
        },
        {
            name: 'Custom 1',
            url: 'http://msn.com',
            disabled: true,
            key: 'key6',
            target: '_blank',
        },
        {
            name: 'Custom 2',
            url: 'http://msn.com',
            disabled: true,
            key: 'key7',
            target: '_blank',
        },
        {
            name: 'Custom 3',
            url: 'http://msn.com',
            disabled: true,
            key: 'key8',
            target: '_blank',
        },
        {
            name: 'Custom 4',
            url: 'http://msn.com',
            disabled: true,
            key: 'key9',
            target: '_blank',
        },
        {
            name: 'Scenario',
            url: 'http://msn.com',
            disabled: true,
            key: 'key10',
            target: '_blank',
        },
        ],
        isExpanded: true,
    },
    {
        name: 'FX',
        url: 'http://example.com',
        expandAriaLabel: 'Expand Home section',
        collapseAriaLabel: 'Collapse Home section',
        links : [
            {
                name: 'Currency',
                url: 'http://msn.com',
                disabled: true,
                key: 'key11',
                target: '_blank',
            },
            {
                name: 'Data',
                url: 'http://msn.com',
                disabled: true,
                key: 'key12',
                target: '_blank',
            },
        ],
        isExpanded: true,
    },
    {
        name: 'Ownership',
        url: 'http://msn.com',
        key: 'key13',
        target: '_blank',
    },
    {
        name: 'Data',
        url: 'http://example.com',
        expandAriaLabel: 'Expand Home section',
        collapseAriaLabel: 'Collapse Home section',
        links : [
            {
                name: 'Select POV',
                url: 'http://msn.com',
                disabled: true,
                key: 'key14',
                target: '_blank',
            },
        ],
        isExpanded: true,
    },
    ],
},
];

export const Navbar: React.FunctionComponent = () => {
return (
    <Nav
        onLinkClick={_onLinkClick}
        selectedKey="key3"
        ariaLabel="Nav basic example"
        styles={navStyles}
        groups={navLinkGroups}
    />
);
};

function _onLinkClick(ev?: React.MouseEvent<HTMLElement>, item?: INavLink) {
    if (item && item.name === 'News') {
        alert('News link clicked');
    }
}
