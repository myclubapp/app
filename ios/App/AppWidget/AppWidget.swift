//
//  AppWidget.swift
//  AppWidget
//
//  Created by Sandro Scalco on 30.08.2024.
//
import WidgetKit
import SwiftUI

struct Provider: AppIntentTimelineProvider {
    func placeholder(in context: Context) -> SimpleEntry {
        SimpleEntry(date: Date(), nextTraining: "placeholder Training", nextEvent: "placeholder Event", nextHelfer: "placeholder Helfer", nextGame: "placeholder Game", configuration: ConfigurationAppIntent())
    }

    func snapshot(for configuration: ConfigurationAppIntent, in context: Context) async -> SimpleEntry {
        SimpleEntry(date: Date(), nextTraining: "Heute Abend 20:00 Uhr", nextEvent: "GV im Gemeindehaus", nextHelfer: "Heimspiel Herren 1", nextGame: "Am Sonntag: UHC Heim vs. UHC Gast", configuration: configuration)
    }
    
    func timeline(for configuration: ConfigurationAppIntent, in context: Context) async -> Timeline<SimpleEntry> {
        var entries: [SimpleEntry] = []
        let sharedDefaults = UserDefaults.init(suiteName: "group.app.myclub.default")

        var _nextEvent: String? = nil
        if(sharedDefaults != nil && configuration.showEvent == true) {
            _nextEvent = sharedDefaults?.string(forKey: "nextEvent")
        }
        
        var _nextTraining: String? = nil
        if(sharedDefaults != nil && configuration.showTraining == true) {
            _nextTraining = sharedDefaults?.string(forKey: "nextTraining")
        }
        
        var _nextHelfer: String? = nil
        if(sharedDefaults != nil && configuration.showHelfer == true) {
            _nextHelfer = sharedDefaults?.string(forKey: "nextHelfer")
        }
        
        var _nextGame: String? = nil
        if(sharedDefaults != nil && configuration.showGame == true) {
            _nextGame = sharedDefaults?.string(forKey: "nextGame")
        }

        let entry = SimpleEntry(date: Date(), nextTraining: _nextTraining ?? "", nextEvent: _nextEvent ?? "", nextHelfer: _nextHelfer ?? "", nextGame: _nextGame ?? "", configuration: configuration)
        entries.append(entry)

        return Timeline(entries: entries, policy: .atEnd)
    }
}

struct SimpleEntry: TimelineEntry {
    var date: Date
    let nextTraining: String?
    let nextEvent: String?
    let nextHelfer: String?
    let nextGame: String?
    let configuration: ConfigurationAppIntent
}


struct AppWidgetEntryView: View {
    var entry: Provider.Entry
    @Environment(\.widgetFamily) var family
    
    var body: some View {
        switch family {
        case .systemSmall:
            SmallWidgetView(entry: entry)
        default:
            SmallWidgetView(entry: entry) // Use same design for all sizes for now
        }
    }
}

struct SmallWidgetView: View {
    let entry: SimpleEntry
    
    var body: some View {
        GeometryReader { geometry in
            let size = geometry.size.width / 2
            
            VStack(spacing: 0) {
                HStack(spacing: 0) {
                    // Training Quadrant
                    QuadrantView(
                        color: .blue,
                        number: "2",
                        text: entry.nextTraining,
                        icon: "figure.walk",
                        isVisible: entry.configuration.showTraining && entry.nextTraining != "",
                        size: size
                    )
                    
                    // Event Quadrant
                    QuadrantView(
                        color: .green,
                        number: "5",
                        text: "",
                        icon: "calendar",
                        isVisible: entry.configuration.showEvent && entry.nextEvent != "",
                        size: size
                    )
                }
                
                HStack(spacing: 0) {
                    // Helfer Quadrant
                    QuadrantView(
                        color: .orange,
                        number: "1",
                        text: "",
                        icon: "lifepreserver",
                        isVisible: entry.configuration.showHelfer && entry.nextHelfer != "",
                        size: size
                    )
                    
                    // Game Quadrant
                    QuadrantView(
                        color: .purple,
                        number: "3",
                        text: "",
                        icon: "trophy",
                        isVisible: entry.configuration.showGame && entry.nextGame != "",
                        size: size
                    )
                }
            }
            .frame(maxWidth: .infinity, maxHeight: .infinity)
        }
        .ignoresSafeArea()
        .background(.clear)
    }
}

struct QuadrantView: View {
    let color: Color
    let number: String?
    let text: String?
    let icon: String
    let isVisible: Bool
    let size: CGFloat
    
    var body: some View {
        ZStack {
            Rectangle()
                .fill(color)
                .frame(width: size, height: size)
            
            if isVisible {
                VStack(spacing: 6) {
                    Text(number ?? "")
                        .font(.system(size: 28, weight: .bold))
                        .foregroundColor(.white)
                    Text(text ?? "")
                        .font(.system(size: 14, weight: .medium))
                        .foregroundColor(.white)
                        .lineLimit(2)
                        .multilineTextAlignment(.center)
                    Image(systemName: icon)
                        .font(.system(size: 16, weight: .semibold))
                        .foregroundColor(.white)
                }
            } else {
                Image(systemName: icon)
                    .font(.system(size: 16, weight: .semibold))
                    .foregroundColor(.white.opacity(0.5))
            }
        }
    }
}

struct AppWidget: Widget {
    let kind: String = "AppWidget"

    var body: some WidgetConfiguration {
        AppIntentConfiguration(kind: kind, intent: ConfigurationAppIntent.self, provider: Provider()) { entry in
            AppWidgetEntryView(entry: entry)
                .containerBackground(.ultraThinMaterial, for: .widget)
        }
    }
}

extension ConfigurationAppIntent {
    fileprivate static var smiley: ConfigurationAppIntent {
        let intent = ConfigurationAppIntent()
        intent.showTraining = true
        return intent
    }
    
    fileprivate static var starEyes: ConfigurationAppIntent {
        let intent = ConfigurationAppIntent()
        intent.showEvent = true
        return intent
    }
}

#Preview(as: .systemSmall) {
    AppWidget()
} timeline: {
    SimpleEntry(
        date: .now,
        nextTraining: "Heute Abend 20:00 Uhr Training",
        nextEvent: "Vereinsversammlung im Gemeindehaus",
        nextHelfer: "Heimspiel: Kasse & Bar",
        nextGame: "UHC Warriors vs UHC Dragons",
        configuration: .smiley
    )
}
