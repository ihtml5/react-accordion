import  React, { Component } from 'react';

import AccordionItem from './AccordionItem';
import './index.css'
class Accordion extends Component {
    constructor(props) {
        super(props);
        const { activeIndex, onlyOneOpen } = this.props;
        this.state = {
            activeIndex: onlyOneOpen ? activeIndex : [activeIndex],
            memoryIndex: [],
        }
        this.resetActiveIndex = this.resetActiveIndex.bind(this);
    }
    getActiveIndex (i, activeIndexs) {
        const activeIndex = activeIndexs.indexOf(i);
        if (activeIndex !== -1) {
            activeIndexs.splice(activeIndex, 1);
        } else {
            activeIndexs.push(i);
        }
        return activeIndexs;
    }
    getIsShow (i, activeIndex) {
        const { onlyOneOpen } = this.props;
        if (onlyOneOpen) {
            return i === activeIndex;
        } else {
            return activeIndex.indexOf(i) !== -1;
        }
    }
    resetActiveIndex(i, itemIndex) {
        this.setState(function(prevState, prevProps) {
            const { onlyOneOpen } = prevProps;
            if (onlyOneOpen) {
                return itemIndex || itemIndex === 0 ? {
                    memoryIndex: [prevState.activeIndex, itemIndex],
                } : {
                    activeIndex: i === prevState.activeIndex ? -1 : i
                }
            } else {
                return itemIndex || itemIndex === 0 ? {
                    memoryIndex: [i, itemIndex]
                } : {
                    activeIndex: this.getActiveIndex(i, prevState.activeIndex)
                } 
            }
        });
    }
    render() {
        const { data , fixed, width} = this.props;
        const { activeIndex, memoryIndex } = this.state;
        let accordionStyle  = null;
        if (fixed && width) {
            accordionStyle = {
                position: 'fixed',
                top: 0,
                left: 0,
                width: width
            }
        } else if (width) {
            accordionStyle = {
                width: width
            }
        }
        return (<div className="base-accordion" style={accordionStyle}>
            {
                data.map((dt, i) => {
                    return <AccordionItem title={dt.title} list= {dt.list} key={i} memoryIndex = {memoryIndex} isShow={this.getIsShow(i, activeIndex)} index={i} resetActiveIndex={this.resetActiveIndex}/>
                })
            }
        </div>)
    }
}

export default Accordion;
