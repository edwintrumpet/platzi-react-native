const BASE_API = 'https://yts.mx/api/v2/';

class Api {
  async getSugerencias(id) {
    const query = await fetch(
      `${BASE_API}movie_suggestions.json?movie_id=${id}`,
    );
    const {
      data: {movies},
    } = await query.json();
    return movies;
  }
}

export default new Api();
