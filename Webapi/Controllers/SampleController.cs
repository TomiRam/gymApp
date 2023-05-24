using Microsoft.AspNetCore.Mvc;

[Route("api/[controller]")]
[ApiController]
public class SampleController : ControllerBase
{
    [HttpGet]
    public ActionResult<string> Get()
    {
        return "Hello, World!";
    }
}