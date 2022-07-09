
export default function DiaryAddProductForm() {
   
    const handleChange = (event) => {
    };
  
    const handleSubmit = (e) => {
    };    
    
    const reset = (e) => {
    };
    
    return (
        <form>
        <label>
          <input
            type="text"
            // value="name"
            // name="name"
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            placeholder="Enter product name"
            required
          />
        </label>
        <label>
          <input
            type="number"
            // value="weight"
            // name="weight"
            onChange={handleChange}
            pattern="\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            placeholder="Grams"
            required
          />
        </label>
        <button type="submit">+</button>
      </form>
    );
  }