import React from 'react';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

import ModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import ContentSave from 'material-ui/svg-icons/content/save';
import ContentCopy from 'material-ui/svg-icons/content/content-copy';


const iconStyles = {
    marginRight: 24,
};
const styles={
    errorStyle: {
        paddingTop: 5
    },
    labelStyle: {
        fontSize: '20px',
        fontWight: 'bold',
        color: '#000000',

        display:'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    contentStyle: {
        flex:1,
        paddingLeft: 20,
        // width: 263,
        overflow:'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
    },
    labelTitleStyle: {
        width: 80,
        textAlign: 'justify',
        textAlignLast: 'justify',
    },
    inputStyle: {
        padding: 8,
        paddingLeft: 0,
    },
    itemStyle: {
        padding: '16px 17px',
        marginTop: 2,
    },
}


export default class EditableTextField extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div style={styles.itemStyle}>
                <div style={styles.labelStyle}>
                    <span  style={styles.labelTitleStyle}>{this.props.label}</span>
                    <span
                        style={styles.contentStyle}
                    >
                            <span>{this.props.value}</span>
                            <ContentCopy
                                style={iconStyles}
                            />
                        </span>

                </div>
            </div>
        );
    }
}