using GenerativeAI;
using GenerativeAI.Core;
using GenerativeAI.Types;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace quickthink_back.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GeminiController : ControllerBase
    {

   

        [HttpPost]
        public async Task<IActionResult> Search(string txt)
        {
            try
            {
                var apiKey = "AIzaSyBJKNLY4yLluiCCfRLQ3ys-qjDy8iM_YMo";

                var model = new GenerativeModel(apiKey, new ModelParams()
                {
                    GenerationConfig = new GenerationConfig()
                    {
                        Temperature = 0.5,
                        CandidateCount = 1
                    },
                    Model = "gemini-1.5-pro"
                });

                Dictionary<Guid, string> dictionaryResponse = new Dictionary<Guid, string>();

 

                var res = await model.GenerateContentAsync(
                $"Pegue o nome da música (acompanhada ou nâo do artista) que será passada e pesquisa, analise e confirme se existe algum sample dela que seja originário de outra música, caso exista, confirme se a sua informação esta correta e então retorne APENAS o nome do artista e da música originária do sample, não retorne novamente o nome da música digitada e nem indique nada, apenas retorne o nome da música que aquele sample é originário! Caso você não tenha identificado a música enviada, retorne um texto padrão como dizendo que a música não foi encontrada, caso a música enviada nao possua nenhum sample originário de outra música, traga um texto padrão dizendo que esssa música não possui samples baseados e outras músicas! Aqui vai o nome da música: " +
                $"Nome música: {txt}");

                dictionaryResponse.Add(new Guid(), res!.ToString());
           

                return Ok(dictionaryResponse.ToList());
            }
            catch (Exception)
            {

                throw;
            }
        }

    }
}
