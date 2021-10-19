const CompanyList = (props) => {

    const {companies = []} = props;

    return (
        <div style={{width: '100%'}}>
            <ul className="collection">
                {companies.map(({name, description, founded_year}) => (
                    <li key={name} className="collection-item avatar">
                        <i className="material-icons circle">business</i>
                        <a href="#!" className="title blue-text">{name}</a>
                        <p>{description}</p>
                        <p>{`Founded in ${founded_year}`}</p>
                        <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CompanyList;