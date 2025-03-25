import Maybe from "components/Maybe";


export const TableContent = (props) => {
    const {loading, loadingText, data, isError, colspan} = props;

    return (
        <>
            <Maybe condition={loading === true}>
                <tr className="table-no-data">
                    <td colSpan={colspan}>
                        <div className="table-info">
                            {/* <FontAwesomeIcon icon="spinner" spin /> */}
                            <div className="font-bold uppercase">
                                {loadingText || "Loading"}
                            </div>
                        </div>
                    </td>
                </tr>
            </Maybe>

            
            <Maybe condition={loading === false && isError === true}>
                <tr className="table-no-data">
                    <td colSpan={colspan}>
                        <div className="table-info">
                            {/* <FontAwesomeIcon icon="unlink" /> */}
                            <div className="font-bold uppercase">
                                An error occurred
                                <br />
                                Please try again later.
                            </div>
                        </div>
                    </td>
                </tr>
            </Maybe>

            
            <Maybe condition={loading === false && isError === false && data.length === 0}>
                <tr className="table-no-data">
                    <td colSpan={colspan}>
                        <div className="table-info">
                            {/* <FontAwesomeIcon icon="unlink" /> */}
                            <div className="font-bold uppercase">
                                No data found
                            </div>
                        </div>
                    </td>
                </tr>
            </Maybe>
        </>
    )
}

export default TableContent;