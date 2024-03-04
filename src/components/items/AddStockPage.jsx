import CreateItem from "./CreateItem";
import DisplayItems from "./DisplayItems";

function AddStockPage() {
    return (
        // The component renders a <div> element containing two child components: <CreateItem /> and <DisplayItems />.
        <div>
            <CreateItem />
            <DisplayItems />

        </div>
        
        );
}

export default AddStockPage;