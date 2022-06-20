import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, Document, INLINES, MARKS, Node, Text } from '@contentful/rich-text-types';
import cn from "classnames";

export default function RichText ({ className, entry }) {
    // helper functions
    const convertNewLinetoBr = (text: string) => {
        return text.split('\n').reduce((children, textSegment, index) => {
            return [...children, index > 0 && <br key={index} />, textSegment];
        }, []);
    }

    // code mark styling
    const Code = ({ children }) => (
        <div className='p-4 mx-auto bg-black rounded prose-quoteless'>
            <code className='text-white'>
                {children}
            </code>
        </div>
    );

    // div wrapper
    const Div = ({ children }) => <div>{children}</div>;

    // p tag styling
    const P = ({ children }) => <p className={className}>{children}</p>;

    // blockquote styling removes TW typog plug-in default styles
    const Quoteless = ({ children }) => (
        <blockquote
            className={cn('prose-quoteless', {
                [className]: className,
            })}
        >
            {children}
        </blockquote>
    );
     
    const options = {
        renderMark: {
            [MARKS.CODE]: text => <Code>{text}</Code>
        },
        renderNode: {
            [BLOCKS.HEADING_1]: (node, children) => {
                return (
                    <h1
                        className={cn('', {
                            
                        })}
                    >
                        {children}
                    </h1>
                )
            },
            [BLOCKS.HEADING_2]: (node, children) => {
                return (
                    <h2>
                        {children}
                    </h2>
                )
            },
            [BLOCKS.HEADING_3]: (node, children) => {
                return (
                    <h3>
                        {children}
                    </h3>
                )
            },
            [BLOCKS.HEADING_4]: (node, children) => {
                return (
                    <h4>
                        {children}
                    </h4>
                )
            },
            [BLOCKS.HEADING_5]: (node, children) => {
                return (
                    <h5>
                        {children}
                    </h5>
                )
            },
            [BLOCKS.HEADING_6]: (node, children) => {
                return (
                    <h6>
                        {children}
                    </h6>
                )
            },
            [BLOCKS.PARAGRAPH]: (node, children) => {
                const nodeMarks: Record<string, any>[] = node.content[0]['marks'];
                // if text marked code, strip <p> and add <div> 
                if (nodeMarks && nodeMarks.length) {
                    const allMarks = nodeMarks.reduce((marks, mark) => {
                        marks.push(mark.type);
                        return marks;
                    }, [])

                    if (allMarks.some((mark: string) => mark === 'code')) {
                        return <Div>{children}</Div>
                    }

                    // if text is marked italic and belongs to a newsArticle return a p element with different styling
                    if(allMarks.some((mark: string) => mark === 'italic')){
                        return (
                            <p className={`text-sky-500 font-semibold text-lg ${className}`}>
                                {children}
                            </p>
                        )
                    }
                }
                
                return <P>{children}</P>
            },
            [BLOCKS.QUOTE]: (node, children) => {
                return <Quoteless>{children}</Quoteless>
            },
            [INLINES.HYPERLINK]: (node, children) => {
                return (
                    <a
                        href={node.data.uri}
                        target='_blank'
                        rel='noreferrer'
                    >
                        {children}
                    </a>
                )
            }
        },
        renderText: convertNewLinetoBr,
    }

    const parsedContent = documentToReactComponents(entry, options);

    return (
        <>
            {parsedContent}
        </>
    );
}

