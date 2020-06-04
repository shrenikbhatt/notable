import { connect } from 'react-redux';

import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Body from '../components/Body';
import Verification from '../components/Verification';

const Index = (props) => {
	return (
		<Layout>
			<div className="container-fluid">
			{!props.verified? (
				<Verification />
				) : (

				<div className="row w-100" style={{height: "100vh"}}>
					<div className="col-3">
						<div className=" h-100 bg-dark row w-100">
							<Sidebar />
						</div>
					</div>
					<div className="col">
						<div className="row w-100">
							<Header />
						</div>
						<div className="row w-100" style={{height: "90vh"}}>
							<Body />
						</div>
					</div>
				</div>
				)
	
				}
			</div>
		</Layout>
		
	);
}
const mapStateToProps = state => {
	return{
		verified: (state.userReducer.verified && !state.notesReducer.error)
	}
}

export default connect(mapStateToProps)(Index);
