from sqlalchemy.orm import Session
from app import engine, Photo, Gallery

with Session(engine) as session:
    
    # Create a new gallery
    galleries = [
    Gallery(title_es='Santiago', title_en="Santiago of Chile", cover=""),
    Gallery(title_es='Estambul', title_en="Istanbul", cover=""),
    Gallery(title_es='Isla de Chiloé', title_en="Island of Chiloé", cover=""),
    Gallery(title_es='California', title_en="California", cover=""),
    Gallery(title_es='Patagonia Chile', title_en="Patagonia Chile", cover=""),
    Gallery(title_es='Detalles del mar', title_en="Details of the Sea", cover=""),
    Gallery(title_es='Montañas', title_en="Mountains", cover=""),
    Gallery(title_es='Protestas', title_en="Protests", cover=""),
    Gallery(title_es='Texturas', title_en="Textures", cover=""),
    Gallery(title_es='Retratos', title_en="Portraits", cover=""),
    Gallery(title_es='Rapa Nui', title_en="Rapa Nui", cover=""),
    Gallery(title_es='Valparaíso', title_en="Valparaíso", cover=""),
    Gallery(title_es='Inglaterra', title_en="England", cover=""),
    Gallery(title_es='Lisboa', title_en="Lisbon", cover="")]
    
    for gallery in galleries:
        session.add(gallery)
    
    session.commit()