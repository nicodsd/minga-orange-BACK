import Manga from '../../models/Manga.js';
import Chapter from '../../models/Chapter.js';

const destroyManga = async (req, res) => {
  const mangaId = req.params.id

  try {
    const destroyedManga = await Manga.deleteOne({ _id: mangaId })
    const destroyedChapters = await Chapter.deleteMany({ manga_id: mangaId })

    if (destroyedManga.deletedCount === 0) {
      return res.status(404).json({ response: 'Manga not found' })
    }

    return res.status(200).json({ response: 'Manga and chapters successfully deleted' })
  } catch (error) {
    throw error;
  }
}

export default destroyManga
