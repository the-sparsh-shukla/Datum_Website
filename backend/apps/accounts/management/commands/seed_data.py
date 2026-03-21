"""
Management command to seed initial data for Datum Website.
Usage: python manage.py seed_data
"""
from django.core.management.base import BaseCommand
from django.utils import timezone
from datetime import datetime


class Command(BaseCommand):
    help = 'Seed initial data: admin user, events, gallery images, team members, achievements'

    def handle(self, *args, **options):
        self.seed_admin()
        self.seed_team()
        self.seed_achievements()
        self.seed_events()
        self.seed_gallery()
        self.stdout.write(self.style.SUCCESS('\n✅ All seed data created successfully!'))

    def seed_admin(self):
        from apps.accounts.models import AdminUser
        if not AdminUser.objects.filter(email='admin@datum.org').exists():
            AdminUser.objects.create_superuser(
                email='admin@datum.org',
                password='admin123',
                name='Krishna',
                role='gallery_lead',
            )
            self.stdout.write('  ✔ Created admin user: admin@datum.org / admin123')
        else:
            self.stdout.write('  - Admin user already exists, skipping.')

    def seed_team(self):
        from apps.team.models import TeamMember
        if TeamMember.objects.exists():
            # Clear and re-seed so updates always apply
            TeamMember.objects.all().delete()

        members = [
            # ── Event Team ──────────────────────────────────────────
            {
                'name': 'Keshav', 'role': 'Event Team Head', 'order': 1,
                'photo_url': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400',
                'linkedin': 'https://linkedin.com', 'github': 'https://github.com',
                'bio': 'Leading the events team to deliver impactful workshops, datathons, and community experiences.',
                'skills': ['Event Planning', 'Leadership', 'Community Building', 'Coordination'],
            },
            {
                'name': 'Kritika Saxena', 'role': 'Event Team Head', 'order': 2,
                'photo_url': 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400',
                'linkedin': 'https://linkedin.com', 'github': 'https://github.com',
                'bio': 'Co-leading the events team with a passion for creating memorable learning experiences.',
                'skills': ['Event Management', 'Public Relations', 'Teamwork', 'Communication'],
            },
            {
                'name': 'Ronit', 'role': 'Event Team Co-Head', 'order': 3,
                'photo_url': 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400',
                'linkedin': 'https://linkedin.com', 'github': 'https://github.com',
                'bio': 'Supporting the events team in organizing and executing impactful Datum events.',
                'skills': ['Logistics', 'Coordination', 'Event Execution', 'Networking'],
            },
            # ── Design Team ─────────────────────────────────────────
            {
                'name': 'Vanshika', 'role': 'Design Team Head', 'order': 4,
                'photo_url': 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400',
                'linkedin': 'https://linkedin.com', 'github': 'https://github.com',
                'bio': 'Crafting the visual identity of Datum through bold, data-driven design.',
                'skills': ['UI/UX Design', 'Figma', 'Brand Identity', 'Motion Graphics'],
            },
            {
                'name': 'Astha', 'role': 'Design Team Co-Head', 'order': 5,
                'photo_url': 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400',
                'linkedin': 'https://linkedin.com', 'github': 'https://github.com',
                'bio': 'Bringing creative vision and precision to every design project at Datum.',
                'skills': ['Graphic Design', 'Illustration', 'Canva', 'Adobe Suite'],
            },
            # ── Tech Team ───────────────────────────────────────────
            {
                'name': 'Harsh', 'role': 'Tech Team Head', 'order': 6,
                'photo_url': 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400',
                'linkedin': 'https://linkedin.com', 'github': 'https://github.com',
                'bio': 'Building and maintaining the technical backbone of Datum, from web platforms to data pipelines.',
                'skills': ['Full Stack Development', 'Django', 'React', 'System Design'],
            },
            {
                'name': 'Priya Shukla', 'role': 'Tech Team Co-Head', 'order': 7,
                'photo_url': 'https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=400',
                'linkedin': 'https://linkedin.com', 'github': 'https://github.com',
                'bio': 'Driving technical innovation and mentoring members across data science and software projects.',
                'skills': ['Python', 'Machine Learning', 'Data Analysis', 'Cloud'],
            },
            # ── Media Team ──────────────────────────────────────────
            {
                'name': 'Aarav', 'role': 'Media & Video Editing', 'order': 8,
                'photo_url': 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400',
                'linkedin': 'https://linkedin.com', 'github': 'https://github.com',
                'bio': 'Capturing and editing the best moments of Datum events to share with the community.',
                'skills': ['Video Editing', 'Photography', 'Adobe Premiere', 'Content Creation'],
            },
        ]
        for m in members:
            TeamMember.objects.create(**m)
        self.stdout.write(f'  ✔ Created {len(members)} team members')

    def seed_achievements(self):
        from apps.team.models import Achievement
        if Achievement.objects.exists():
            self.stdout.write('  - Achievements already exist, skipping.')
            return

        achievements = [
            {'year': '2023', 'title': '500+ Active Members', 'description': 'Reached half a thousand community members.', 'order': 1},
            {'year': '2023', 'title': 'Best College Club Award', 'description': 'Recognized as the best technical club on campus.', 'order': 2},
            {'year': '2024', 'title': 'Annual Datathon', 'description': 'Hosted our first datathon with 50+ participants.', 'order': 3},
            {'year': '2024', 'title': '10 Workshops Delivered', 'description': 'Conducted 10 hands-on ML/AI workshops.', 'order': 4},
        ]
        for a in achievements:
            Achievement.objects.create(**a)
        self.stdout.write(f'  ✔ Created {len(achievements)} achievements')

    def seed_events(self):
        from apps.events.models import Event
        if Event.objects.exists():
            self.stdout.write('  - Events already exist, skipping.')
            return

        events = [
            {
                'title': 'Advanced ML Workshop',
                'date': timezone.make_aware(datetime(2025, 3, 25, 14, 0)),
                'category': 'Workshop',
                'description': 'Deep dive into machine learning algorithms and practical applications.',
                'image_url': 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=800',
            },
            {
                'title': 'Data Visualization Challenge',
                'date': timezone.make_aware(datetime(2025, 4, 5, 10, 0)),
                'category': 'Competition',
                'description': 'Create compelling data visualizations using real-world datasets.',
                'image_url': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800',
            },
            {
                'title': 'Industry Networking Night',
                'date': timezone.make_aware(datetime(2025, 5, 10, 18, 0)),
                'category': 'Networking',
                'description': 'Connect with data professionals and industry leaders.',
                'image_url': 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=800',
            },
        ]
        for e in events:
            Event.objects.create(**e)
        self.stdout.write(f'  ✔ Created {len(events)} events')

    def seed_gallery(self):
        from apps.gallery.models import GalleryImage
        if GalleryImage.objects.exists():
            self.stdout.write('  - Gallery images already exist, skipping.')
            return

        images = [
            {
                'url': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800',
                'title': 'Datathon 2024', 'category': 'Events',
                'description': 'Annual datathon competition with 50+ participants',
                'tags': ['competition', 'datathon', 'students'], 'is_featured': True,
            },
            {
                'url': 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=800',
                'title': 'ML Workshop', 'category': 'Workshops',
                'description': 'Machine learning workshop for beginners',
                'tags': ['workshop', 'ml', 'learning'], 'is_featured': False,
            },
            {
                'url': 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=800',
                'title': 'Core Team Meet', 'category': 'Team',
                'description': 'Monthly core team planning session',
                'tags': ['team', 'meeting', 'planning'], 'is_featured': True,
            },
        ]
        for i in images:
            GalleryImage.objects.create(**i)
        self.stdout.write(f'  ✔ Created {len(images)} gallery images')
