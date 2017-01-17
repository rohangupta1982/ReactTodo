var React = require('react');

var Main = (props) => {
    return(
        <div>
            <div>
                <div>
                    <div className="row">
                        <h1>Main Controller</h1>
                        <div className="columns small-4 small-centered">
                            {props.children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

module.exports = Main;