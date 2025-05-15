import '../stylePage/styleSheep.css';
import photoList from '../Stock/SheepList';
import { useState } from 'react';
export default function Sheep() {
  const [newList ,setNewList]=useState(photoList)
  const [ recherByCategory,setRecherByCategory]=useState('all')
  const [ TypePrice,setTypePrice]=useState(0)
  const [selectedType, setSelectedType] = useState("all");
const [selectedQuality, setSelectedQuality] = useState("all");
const handleResetFilters = () => {
  setRecherByCategory('all');
  setSelectedType('all');
  setSelectedQuality('all');
  setTypePrice(0);
};
const filteredList = newList.filter((e) => {
  const matchCategory = recherByCategory === 'all' || e.category === recherByCategory;
  const matchPrice = TypePrice === 0 || e.price <= TypePrice;
  const matchType = selectedType === 'all' || e.type === selectedType;
  const matchQuality = selectedQuality === 'all' || e.quality === selectedQuality;
  return matchCategory && matchPrice && matchType && matchQuality;
});
return<div className="gallery-container" style={{marginTop:'70px'}}>
<div className="gallery-header">
    <h2>{Number(filteredList.length)} images and videos</h2>
    
    <div className="search-filters">
        <div className="quick-searches">
            <span onClick={()=>setRecherByCategory('Paysage')}> <i className='bi bi-search'></i> Morocco landscape</span>
            <span onClick={()=>setRecherByCategory('Pub')}> <i className='bi bi-search'></i> Morocco ad</span>
            <span onClick={()=>setRecherByCategory('Maison')}><i className='bi bi-search'></i>  Morocco house</span>
        </div>
        
        <div className="main-filters">
            <div className="filter-group">
                <span onClick={handleResetFilters}>All</span>
                <span onClick={()=>setSelectedType('Essentials')}>Essentials</span>
                <span onClick={()=>setTypePrice(3500)}>Lowest price</span>
                <span onClick={()=>setSelectedType('Signature')}>Signature</span>
                <span onClick={()=>setSelectedQuality('best')}>Best quality</span>
            </div>
            
        </div>
    </div>
</div>

<div className="photo-grid">
{filteredList.map((photo) => (
  <div key={photo.id} className="photo-card">
    <img src={photo.imageUrl} alt={photo.title} />
  </div>
))}

</div>
</div>

  }
  