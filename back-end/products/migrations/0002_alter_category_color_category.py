# Generated by Django 4.2.11 on 2024-04-30 15:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='category',
            name='color_category',
            field=models.CharField(choices=[('slate', 'Slate'), ('red', 'Red'), ('orange', 'Orange'), ('yellow', 'Yellow'), ('lime', 'Lime'), ('green', 'Green'), ('blue', 'Blue'), ('purple', 'Purple'), ('pink', 'Pink')], max_length=20),
        ),
    ]
