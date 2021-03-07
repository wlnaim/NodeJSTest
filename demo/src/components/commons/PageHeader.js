import React, { Component } from 'react';
import PropTypes from 'prop-types';

// @ts-ignore
const $ = window.$;
class PageHeader extends Component {
    componentDidMount() {
        if (this.props.sticky) {
            $('.ui.sticky').sticky({ context: '#content', observeChanges: true });
        }
    }

    render() {
        return (
            <div className="ui grid sticky custom-header">
                <div className="four wide computer sixteen wide mobile column" style={{ display: 'flex', alignItems: 'center' }}>
                    <h1 className="ui header" style={{ display: 'inline-block', margin: '0 10px 0 0' }}>{this.props.title}</h1>
                </div>
                {this.props.topComponents ?
                    <div className="twelve wide computer sixteen wide mobile ten wide tablet column right aligned no-print">
                        {this.props.topComponents}
                    </div> : null}
            </div>
        );
    }
}

PageHeader.propTypes = {
    title: PropTypes.any,
    topComponents: PropTypes.any,
    sticky: PropTypes.any
};

export default PageHeader;