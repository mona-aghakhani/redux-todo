import React from 'react';
import {makeStyles, useTheme, withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import {connect, useDispatch, useSelector} from "react-redux";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Divider from "@material-ui/core/Divider";
import Switch from "@material-ui/core/Switch";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from '@material-ui/icons/Delete';
import Box from "@material-ui/core/Box";
import {deleteTodo} from "../store/toolkit/todoSlice";
import {withWidth} from "@material-ui/core";

const styles=(theme) => ({
    card: {
        padding: "20px",
        margin: "20px 0"
    },
    todo: {
        position: "relative",
        display: "flex",
        flexFow: "row",
        alignContent: "space-between"
    },
    label: {
        display: "flex",
        width: "100%"
    },
    divider: {
        position: "absolute",
        width: "100%",
        top: 0
    }
});
const useStyles = makeStyles(styles);

function _MediaControlCard() {
    const styles = useStyles();
    const dispatch = useDispatch();
    const tasks = useSelector((state) => state.todos.tasks)


    return (
        <Card className={styles.card}>
            <FormGroup>
                {tasks.map((task, index) => (
                    <Box key={index} className={styles.todo}>
                        {index > 0 ? <Divider className={styles.divider} /> : ""}
                        <FormControlLabel
                            control={
                                <Switch
                                    color="primary"
                                    checked={!task.done}
                                    onChange={() => this.toggle(task)}
                                />
                            }
                            label={task}
                            className={task.done ? styles.done : styles.label}
                        />
                        <Tooltip title="Delete task" placement="top">
                            <IconButton
                                aria-label="delete"
                                onClick={() => {dispatch(deleteTodo(index))}}
                            >
                                <DeleteIcon />
                            </IconButton>
                        </Tooltip>
                    </Box>
                ))}
            </FormGroup>
        </Card>

    );
}
class MediaControlCard extends React.Component{

    render() {
        const {classes:styles}=this.props
        console.log(this.props);
        return (<Card className={styles.card}>
                    <FormGroup>
                        {this.props.tasks.map((task, index) => (
                            <Box key={index} className={styles.todo}>
                                {index > 0 ? <Divider className={styles.divider} /> : ""}
                                <FormControlLabel
                                    control={
                                        <Switch
                                            color="primary"
                                            checked={!task.done}
                                            onChange={() => this.toggle(task)}
                                        />
                                    }
                                    label={task}
                                    className={task.done ? styles.done : styles.label}
                                />
                                <Tooltip title="Delete task" placement="top">
                                    <IconButton
                                        aria-label="delete"
                                        onClick={() => {this.props.deleteTodo(index)}}
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                </Tooltip>
                            </Box>
                        ))}
                    </FormGroup>
                </Card>)
    }
}

const StyledMediaControlCard=withStyles(styles)(MediaControlCard);
const MapStateToProps=(state)=>{
    console.log('~~~~state~~~~',state);
    return {
        tasks:state.todos.tasks
    }
};
export default connect(MapStateToProps,{deleteTodo})(StyledMediaControlCard)