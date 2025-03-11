import { CSSProperties } from 'react';

const Container = { 
    display: 'flex',
    flexWrap: 'wrap' as CSSProperties['flexWrap'],
    padding: '6rem',
    gap: '4rem',
};

const Background = { 
    backgroundColor: '#6363DA',
    width: '100%',
};

const BackgroundAlt = {
    backgroundColor: '#911E1E',
}

const Caption = {
    textTransform: 'uppercase' as 'uppercase',
    fontSize: '0.88rem',
    margin: 0,
}

const TextContent = {
    flex: 1,
}

const Image = {
    minWidth: '50%',
    maxWidth: '45%',
    flex: 2,
}

const ProjectLinks = {
    display: 'flex',
    gap: '1rem',
}

const Content = {
    marginBottom: '4rem',
}

export const styles = { 
    Container: Container,
    Background: Background,
    BackgroundAlt: BackgroundAlt,
    Caption: Caption,
    Image: Image,
    ProjectLinks: ProjectLinks,
    Content: Content,
    TextContent: TextContent,
};
