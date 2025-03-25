import Maybe from "components/Maybe";

interface TableContentProps {
    loading: boolean,
    loadingText?: string,
    data: any,
    colspan: number,
}


export const TableContent = (props: TableContentProps) => {
    const {loading, loadingText, data, colspan} = props;

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

            
            <Maybe condition={loading === false && !data}>
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
        </>
    )
}

export default TableContent;