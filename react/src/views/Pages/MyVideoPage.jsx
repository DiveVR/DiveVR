import React from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import {getUID} from '../../components/firebase/firebaseAuth.js'
const util = require('util');


function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(3),
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
}));

const StyledTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
}))(TableRow);

class MyVideoPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
        };
    }
    componentDidMount() {
        getUID().then(user => {
            fetch(util.format('%s/videos?uid=%s', process.env.REACT_APP_EXPRESS_BACKEND, user.uid), {
                method: "GET",
                headers: {
                    "Accept": "application/json",
                    'Content-Type': 'application/json'
                }
              })
              .then(response => {
                return response.json() // 401 = Unauthorized; 200 = OK
              })
              .then(responseData => {
                this.setState({videos: responseData})
                console.log(this.state.videos)
                return responseData
              })
        })
    }

    render() {
        return (
            <Paper className={"classes.root"}>
                <Table className={"classes.table"} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Videos</StyledTableCell>
                            <StyledTableCell></StyledTableCell>
                            <StyledTableCell></StyledTableCell>
                            <StyledTableCell></StyledTableCell>
                            <StyledTableCell></StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.videos.length > 0 ? this.state.videos.map(video => (
                            <StyledTableRow key={video.videoTitle}>
                                <StyledTableCell component="th" scope="row">
                                    {<a href={video.url}>{video.videoTitle}</a>}
                                </StyledTableCell>
                                <StyledTableCell align="right"></StyledTableCell>
                                <StyledTableCell align="right"></StyledTableCell>
                                <StyledTableCell align="right"></StyledTableCell>
                                <StyledTableCell align="right"></StyledTableCell>
                            </StyledTableRow>
                        )) : <h2>Loading...</h2>}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}

export default MyVideoPage
