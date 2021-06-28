import React,{useState} from 'react';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import {useDispatch, useSelector} from 'react-redux'
import MediaControlCard from "./components/Card";
import {actionCreator, addTodo} from "./store/toolkit/todoSlice";
import { connect } from 'react-redux'
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import {darkMode} from "./store/actions/theme";
const styles=(theme) => ({
  root: {
    flexGrow: 1,
  },

  header: {
    justifyContent: "center",
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  }
})
const useStyles = makeStyles(styles);

function _App() {
  const styles = useStyles();

  const [newTask,setNewTask]=useState('');
  const dispatch = useDispatch();
  return (
      <div className={styles.root}>
        <header className={styles.header}>
          <TextField
              label="Add new task"
              value={newTask}
              onChange={(e)=>setNewTask(e.target.value)}
          />
          <Button
              variant="raised"
              color="primary"
              disabled={!newTask}
              onClick={()=>{dispatch(actionCreator(newTask))}}
          >
            Add
          </Button>
        </header>
        <MediaControlCard/>
      </div>
  );
}

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      newTask:''
    };
    console.log(props)
  }

  render() {
    const { classes:styles } = this.props;
    return (
        <div className={styles.root}>
          {this.props.loading && 'loading....'}
          <header className={styles.header}>
            <TextField
                label="Add new task"
                value={this.state.newTask}
                onChange={(e)=>this.setState({newTask:e.target.value})}
            />
            <Button
                variant="raised"
                color="primary"
                disabled={!this.state.newTask}
                onClick={()=>{this.props.addTodo(this.state.newTask)}}
            >
              Add
            </Button>
            <FormControlLabel
                control={<Switch checked={this.props.dark} onChange={(e)=>this.props.darkMode(e.target.checked )} name="checkedA" />}
                label="Secondary"
            />
          </header>
          <MediaControlCard/>
        </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching plain actions
    actionCreator: (task) => dispatch(actionCreator(task)),
    decrement: () => dispatch({ type: 'DECREMENT' }),
    reset: () => dispatch({ type: 'RESET' }),
  }
};
let StyledApp=withStyles(styles)(App);
const mapStateToProps=(state)=>{
  return {
    dark:state.theme.dark,
    loading:state.todos.loading
  }
};
export default connect(mapStateToProps, { addTodo:actionCreator,darkMode })(StyledApp)