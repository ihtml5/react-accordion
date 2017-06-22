import React, { Component } from 'react';
class AccordionItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeHighIndex: -1
        }
        this.resetHighIndex = this.resetHighIndex.bind(this);
    }
    resetHighIndex(i) {
        this.setState(function(prevState, prevProps) {
            return {
                activeHighIndex: i === prevState.activeHighIndex ? -1 : i
            }
        });
    }
    render() {
        const { title, list, isShow, index, resetActiveIndex, memoryIndex } = this.props;
        const { activeHighIndex } = this.state;
        return (
            <div className="base-accordionItem">
                <h3 className="base-accordionTitle" onClick={() => {
                    this.resetHighIndex(-1);
                    resetActiveIndex(index);
                }}>{title}</h3>
                {isShow ? <ul>
                    {list.map((list, i) => <li key={list.text}>
                        <a href={list.href} onClick={() => {
                            resetActiveIndex(index, i);
                            this.resetHighIndex(-1);
                    }} style={ i.toString() === ((memoryIndex[0] === index && memoryIndex[1].toString()) || activeHighIndex.toString()) ? { color: '#000', fontWeight: '600'} : null}>{list.text}</a></li>)}
                </ul> : null}
            </div>
        );
    }
}

export default AccordionItem;