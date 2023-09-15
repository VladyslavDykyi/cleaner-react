
const AddCleaners = (props) => {
	return (
		<section className="calculator-wrapper">
			<h2 className="t-s-bold t-4">
				2. Режим TURBO
			</h2>
			<div className="counter-wrapper">
				<p className="t-s-bold">
					Додати клінерів
				</p>
				<div className="counter">
					<button className="back" type="button">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
						     viewBox="0 0 24 24"
						     fill="none">
							<path fill-rule="evenodd" clip-rule="evenodd"
							      d="M3 12C3 11.5858 3.33579 11.25 3.75 11.25H20.25C20.6642 11.25 21 11.5858 21 12C21 12.4142 20.6642 12.75 20.25 12.75H3.75C3.33579 12.75 3 12.4142 3 12Z"
							      fill="#A0A29C"/>
						</svg>
					</button>
					<label htmlFor="countCleaner">
						<input type="number" name="countCleaner" id="countCleaner" value="1"
						       required/>
					</label>
					<button className="next" type="button">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
						     viewBox="0 0 24 24"
						     fill="none">
							<path fill-rule="evenodd" clip-rule="evenodd"
							      d="M12 3C12.4142 3 12.75 3.33579 12.75 3.75V11.25H20.25C20.6642 11.25 21 11.5858 21 12C21 12.4142 20.6642 12.75 20.25 12.75H12.75V20.25C12.75 20.6642 12.4142 21 12 21C11.5858 21 11.25 20.6642 11.25 20.25V12.75H3.75C3.33579 12.75 3 12.4142 3 12C3 11.5858 3.33579 11.25 3.75 11.25H11.25V3.75C11.25 3.33579 11.5858 3 12 3Z"
							      fill="#A0A29C"/>
						</svg>
					</button>
				</div>
			</div>
		</section>
	)
}
export default AddCleaners;