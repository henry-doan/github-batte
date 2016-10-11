var USER_DATA = {
	name: 'Henry Doan', 
	username: 'nightwing891',
	image: 'http://res.cloudinary.com/doan/image/upload/v1476220482/Screen_Shot_2016-07-09_at_7.41.16_PM_kb53es.png'
}

var React = require('react');
var ReactDOM = require('react-dom');

/*
	Focused
	Independent
	Reusable
	Small
	Testable
*/

var ProfilePic = React.createClass({
	render: function () {
		return <img src={this.props.imageUrl} style={{height: 100, width: 100}} />	
	}
});

var ProfileLink = React.createClass({
	render: function () {
		return (
			<div>
				<a href={'https://www.github.com/' + this.props.username}>
					{this.props.username}
				</a>
			</div>
		)
	}
 });

var ProfileName = React.createClass({
	render: function () {
		return (
			<div>{this.props.name}</div>
		)
	}
});

var Avatar = React.createClass({
	render: function() {
		return (
			<div>
				<ProfilePic imageUrl={this.props.user.image} />
				<ProfileName name={this.props.user.name} />
				<ProfileLink username={this.props.user.username} />
			</div>
		)
	}
})

ReactDOM.render(
		<Avatar user={USER_DATA} />, 
		document.getElementById('app')
);