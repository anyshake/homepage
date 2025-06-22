import React, { JSX, useEffect } from 'react';
import OriginalRoot from '@theme-original/Root';
import { useLocation } from '@docusaurus/router';
import mediumZoom, { Zoom } from 'medium-zoom';

let zoom: Zoom | null = null;

const Root = (props: any) => {
    const location = useLocation();

    useEffect(() => {
        if (typeof window === 'undefined') {
            return;
        }

        if (zoom) {
            zoom.detach();
            zoom = null;
        }

        zoom = mediumZoom('.markdown img:not(em img)', {
            margin: 24,
            background: '#fff',
            scrollOffset: 0
        });
    }, [location.pathname]);

    return <OriginalRoot {...props} />;
};

export default Root;
