use discord_rich_presence::activity::{Activity, ActivityType, Assets, Timestamps};
use discord_rich_presence::{DiscordIpc, DiscordIpcClient};
use std::error::Error;
use std::thread;
use std::time::{Duration, SystemTime, UNIX_EPOCH};

const CLIENT_ID: &str = "1535454070595133490";
const UPDATE_INTERVAL: Duration = Duration::from_secs(15);

fn activity() -> Activity<'static> {
    let start = SystemTime::now()
        .duration_since(UNIX_EPOCH)
        .expect("time went backwards")
        .as_secs() as i64;

    Activity::new()
        .state("В лаунчере")
        .timestamps(Timestamps::new().start(start))
        .assets(
            Assets::new()
                .large_image("small_png")
                .large_text("Sphinx Launcher")
                .small_image("small_png")
                .small_text("v0.1.0"),
        )
        .activity_type(ActivityType::Playing)
}

fn run() -> Result<(), Box<dyn Error>> {
    let mut client = DiscordIpcClient::new(CLIENT_ID)?;
    client.connect()?;

    loop {
        client.set_activity(activity())?;
        thread::sleep(UPDATE_INTERVAL);
    }
}

pub fn start() {
    thread::spawn(|| loop {
        match run() {
            Ok(()) => {}
            Err(_) => thread::sleep(Duration::from_secs(5)),
        }
    });
}
