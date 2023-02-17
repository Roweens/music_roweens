import { ReactNode } from 'react';
import ReactDOM from 'react-dom';

const portalRoot = document.getElementById('modals-root')!;

function Portal({ children }: { children: ReactNode }) {
    return ReactDOM.createPortal(children, portalRoot);
}

export default Portal;
